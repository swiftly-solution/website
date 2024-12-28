package router

import (
	"net/http"
	"strings"

	"github.com/gin-contrib/static"
	"github.com/gin-gonic/gin"
)

func SetupRouter() {
	router := gin.New()

	router.Use(gin.Recovery())

	router.Use(static.Serve("/", static.LocalFile("../client/dist", false)))
	router.NoRoute(func(ctx *gin.Context) {
		if !strings.HasPrefix(ctx.Request.URL.Path, "/api/") {
			ctx.File("../client/dist/index.html")
		}
	})

	api := router.Group("/api")
	{
		api.GET("/ping", func(ctx *gin.Context) {
			ctx.JSON(http.StatusOK, gin.H{
				"message": "pong",
			})
		})
	}

	router.Run("127.0.0.1:6699")
}
