provider "kubernetes" {
  config_path = "~/.kube/config"  # Ubicación de tu archivo kubeconfig
}

resource "kubernetes_ingress" "my_ingress" {
  metadata {
    name = "my-ingress"
  }
  spec {
    # Aquí va la configuración del Ingress
    rule {
      host = "example.com"  # Cambia esto al dominio deseado
      http {
        path {
          backend {
            service_name = "mi-servicio"
            service_port = 80
          }
        }
      }
    }
  }
}