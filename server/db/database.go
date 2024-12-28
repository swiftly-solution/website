package db

import (
	"fmt"
	"os"
	"swiftlycs2-server/types"
	"sync"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var (
	instance *gorm.DB
	once     sync.Once
)

func Connect() *gorm.DB {
	once.Do(func() {
		dsn := fmt.Sprintf(
			"%s:%s@tcp(%s:%s)/%s?charset=utf8mb4&parseTime=True&loc=Local",
			os.Getenv("DATABASE_USER"), os.Getenv("DATABASE_PASSWORD"),
			os.Getenv(("DATABASE_HOST")), os.Getenv("DATABASE_PORT"),
			os.Getenv("DATABASE_NAME"),
		)

		db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
		if err != nil {
			panic(err)
		}

		instance = db

		err = instance.AutoMigrate(&types.User{})
		if err != nil {
			panic(err)
		}
	})
	return instance
}

func Get() *gorm.DB {
	if instance == nil {
		Connect()
	}
	return instance
}
