import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn, ManyToOne} from "typeorm";
import { Cinema } from "./cine.entities";
import { PaymentInfo } from "./paymentInfo.entities";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column()
  name: string;
  
  @Column()
  birthDate: Date

  @Column({default : true})
  isActive: boolean

  @Column({default: false})
  isAdm: boolean

  @Column({default: false})
  isEmploee: boolean

  @Column()
  contact : string

  @Column()
  email: string;

  @CreateDateColumn()
  createdAt : Date

  @UpdateDateColumn()
  updatedAt : Date
  
  // @OneToOne(()=> Ticket)@JoinColumn()
  // ticket: string

  @OneToOne (()=> PaymentInfo)@JoinColumn()
  paymentInfo: string

  @ManyToOne(()=> Cinema, {eager:true})
  cinema: Cinema

}

