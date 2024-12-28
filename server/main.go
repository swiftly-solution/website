package main

import (
	"swiftlycs2-server/db"
	"swiftlycs2-server/env"
	"swiftlycs2-server/router"
)

func main() {
	env.Load()
	db.Connect()
	router.SetupRouter()
}
