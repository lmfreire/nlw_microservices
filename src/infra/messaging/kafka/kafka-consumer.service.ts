import { Injectable, OnModuleDestroy } from "@nestjs/common"
import { ServerKafka } from "@nestjs/microservices";

@Injectable()
export class KafkaConsumerService extends ServerKafka implements OnModuleDestroy{
  
  constructor(){
    super({
      client: {
        clientId: 'notifications',
        brokers: ['touching-wren-10465-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username: 'dG91Y2hpbmctd3Jlbi0xMDQ2NSQvhscZzT1Yus-8I9mtaexATA6WNdlA2w1cT_k',
          password: 'MmUyYTZlZDctNDIxYS00NzM3LWIzNjktYjc4ZDZjOWY0OWIw',
        },
        ssl: true,
      }    
    })
  }
  
  async onModuleDestroy() {
    await this.close();
  }

}