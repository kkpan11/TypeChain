/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface EventsInterface extends ethers.utils.Interface {
  functions: {
    "emit_anon1()": FunctionFragment;
    "emit_event1()": FunctionFragment;
    "emit_event2()": FunctionFragment;
    "emit_event3()": FunctionFragment;
    "emit_event3_overloaded()": FunctionFragment;
    "emit_event4()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "emit_anon1",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "emit_event1",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "emit_event2",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "emit_event3",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "emit_event3_overloaded",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "emit_event4",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "emit_anon1", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "emit_event1",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "emit_event2",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "emit_event3",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "emit_event3_overloaded",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "emit_event4",
    data: BytesLike
  ): Result;

  events: {
    "AnonEvent1(uint256)": EventFragment;
    "Event1(uint256,uint256)": EventFragment;
    "Event2(uint256)": EventFragment;
    "Event3(bool,uint256)": EventFragment;
    "Event4(tuple)": EventFragment;
    "NoArgsEvent()": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AnonEvent1"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Event1"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Event2"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Event3"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Event4"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NoArgsEvent"): EventFragment;
}

export type AnonEvent1Event = TypedEvent<[BigNumber] & { value1: BigNumber }>;

export type Event1Event = TypedEvent<
  [BigNumber, BigNumber] & { value1: BigNumber; value2: BigNumber }
>;

export type Event2Event = TypedEvent<[BigNumber] & { arg0: BigNumber }>;

export type Event3_bool_uint256_Event = TypedEvent<
  [boolean, BigNumber] & { value1: boolean; value2: BigNumber }
>;

export type Event3_uint256_Event = TypedEvent<
  [BigNumber] & { value1: BigNumber }
>;

export type Event4Event = TypedEvent<
  [[BigNumber, string] & { index: BigNumber; name: string }] & {
    data: [BigNumber, string] & { index: BigNumber; name: string };
  }
>;

export type NoArgsEventEvent = TypedEvent<[] & {}>;

export class Events extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: EventsInterface;

  functions: {
    emit_anon1(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    emit_event1(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    emit_event2(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    emit_event3(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    emit_event3_overloaded(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    emit_event4(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  emit_anon1(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  emit_event1(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  emit_event2(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  emit_event3(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  emit_event3_overloaded(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  emit_event4(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    emit_anon1(overrides?: CallOverrides): Promise<void>;

    emit_event1(overrides?: CallOverrides): Promise<void>;

    emit_event2(overrides?: CallOverrides): Promise<void>;

    emit_event3(overrides?: CallOverrides): Promise<void>;

    emit_event3_overloaded(overrides?: CallOverrides): Promise<void>;

    emit_event4(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "AnonEvent1(uint256)"(
      value1?: BigNumberish | null
    ): TypedEventFilter<[BigNumber], { value1: BigNumber }>;

    AnonEvent1(
      value1?: BigNumberish | null
    ): TypedEventFilter<[BigNumber], { value1: BigNumber }>;

    "Event1(uint256,uint256)"(
      value1?: BigNumberish | null,
      value2?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber],
      { value1: BigNumber; value2: BigNumber }
    >;

    Event1(
      value1?: BigNumberish | null,
      value2?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber],
      { value1: BigNumber; value2: BigNumber }
    >;

    "Event2(uint256)"(
      undefined?: null
    ): TypedEventFilter<[BigNumber], { arg0: BigNumber }>;

    Event2(
      undefined?: null
    ): TypedEventFilter<[BigNumber], { arg0: BigNumber }>;

    "Event3(bool,uint256)"(
      value1?: boolean | null,
      value2?: null
    ): TypedEventFilter<
      [boolean, BigNumber],
      { value1: boolean; value2: BigNumber }
    >;

    "Event3(uint256)"(
      value1?: BigNumberish | null
    ): TypedEventFilter<[BigNumber], { value1: BigNumber }>;

    "Event4(tuple)"(
      data?: null
    ): TypedEventFilter<
      [[BigNumber, string] & { index: BigNumber; name: string }],
      { data: [BigNumber, string] & { index: BigNumber; name: string } }
    >;

    Event4(
      data?: null
    ): TypedEventFilter<
      [[BigNumber, string] & { index: BigNumber; name: string }],
      { data: [BigNumber, string] & { index: BigNumber; name: string } }
    >;

    "NoArgsEvent()"(): TypedEventFilter<[], {}>;

    NoArgsEvent(): TypedEventFilter<[], {}>;
  };

  estimateGas: {
    emit_anon1(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    emit_event1(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    emit_event2(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    emit_event3(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    emit_event3_overloaded(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    emit_event4(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    emit_anon1(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    emit_event1(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    emit_event2(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    emit_event3(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    emit_event3_overloaded(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    emit_event4(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
