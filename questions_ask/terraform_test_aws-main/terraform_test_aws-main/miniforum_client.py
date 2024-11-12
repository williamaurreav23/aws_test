import grpc
import miniforum_pb2
import miniforum_pb2_grpc

def run():
    with grpc.insecure_channel('localhost:50052') as channel:
        stub = miniforum_pb2_grpc.MiniforumServiceStub(channel)
        response = stub.RegisterUser(miniforum_pb2.RegisterUserRequest(username="user1", password="pass123", email="user1@example.com"))
        print("Miniforum client received: " + response.message)

if __name__ == '__main__':
    run()