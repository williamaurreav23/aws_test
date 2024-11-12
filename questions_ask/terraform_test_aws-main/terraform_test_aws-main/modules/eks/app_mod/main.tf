resource "kubernetes_deployment" "my_app_deployment" {
  metadata {
    name = "my-app"
  }

  spec {
    template {
      metadata {
        labels = {
          app = "my-app"
        }
      }

      spec {
             {
          name  = "my-container"
          image = "nginx:latest"  # Cambia la imagen por la de tu aplicación

          
          ports {
            container_port = 80  # Puerto en el que tu aplicación está escuchando
          }

          
          env {
            name  = "ENV_VARIABLE"
            value = "valor_de_la_variable"
          }
        }
      }
    }
  }
}