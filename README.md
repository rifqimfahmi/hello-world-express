What are you looking here?

# Start It

```
docker-compose up --build
```

```
curl http://localhost:3000
# With reverse proxy
curl http://localhost:80
```
## Connect to PostgreSQL
```
psql -h localhost -p 5432 -U myuser -d exampledb
```
## Leader Election?
Use consensus algorithm, Paxos or Raft algorithm. Example of third-party leader election:
- ZooKeeper
- Etcd

## Peer-to-peer
- Gossip protocol?
- DHT? Distributed Hash Tables
- Kraken? https://github.com/uber/kraken.git
- Torrent use P2P