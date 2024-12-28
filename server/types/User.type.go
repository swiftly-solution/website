package types

import "gorm.io/gorm"

type User struct {
	gorm.Model
	Username string `gorm:"size:256,unique"`
	Email    string `gorm:"size:64,unique"`
	Password string
	Admin    bool `gorm:"default:false"`
}
