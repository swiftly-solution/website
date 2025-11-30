---
title: CSVCMsg_PacketEntities
---

# Interface CSVCMsg_PacketEntities

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_PacketEntities.cs#L9)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CSVCMsg_PacketEntities : ITypedProtobuf<CSVCMsg_PacketEntities>, INativeHandle, INetMessage<CSVCMsg_PacketEntities>, IDisposable
```

#### Implements

- [ITypedProtobuf<CSVCMsg_PacketEntities>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)
- [INetMessage<CSVCMsg_PacketEntities>](/docs/api/netmessages/inetmessaget)
- [IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

## Properties

### ActiveSpawngroupHandle

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_PacketEntities.cs#L42)

```csharp
uint ActiveSpawngroupHandle { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### AlternateBaselines

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_PacketEntities.cs#L60)

```csharp
IProtobufRepeatedFieldSubMessageType<CSVCMsg_PacketEntities_alternate_baseline_t> AlternateBaselines { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/netmessages/iprotobufrepeatedfieldsubmessagetypet)<[CSVCMsg_PacketEntities_alternate_baseline_t](/docs/api/protobufdefinitions/csvcmsg_packetentities_alternate_baseline_t)>

### Baseline

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_PacketEntities.cs#L30)

```csharp
int Baseline { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### CmdRecvStatus

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_PacketEntities.cs#L66)

```csharp
IProtobufRepeatedFieldValueType<int> CmdRecvStatus { get; }
```

#### Property Value

- [IProtobufRepeatedFieldValueType](/docs/api/netmessages/iprotobufrepeatedfieldvaluetypet)<[int](https://learn.microsoft.com/dotnet/api/system.int32)>

### CqDiscardedCommandTicks

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_PacketEntities.cs#L75)

```csharp
uint CqDiscardedCommandTicks { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### CqStarvedCommandTicks

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_PacketEntities.cs#L72)

```csharp
uint CqStarvedCommandTicks { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### DeltaFrom

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_PacketEntities.cs#L33)

```csharp
int DeltaFrom { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### DevPadding

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_PacketEntities.cs#L81)

```csharp
byte[] DevPadding { get; set; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)[]

### EntityData

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_PacketEntities.cs#L36)

```csharp
byte[] EntityData { get; set; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)[]

### HasPvsVisBitsDeprecated

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_PacketEntities.cs#L63)

```csharp
uint HasPvsVisBitsDeprecated { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### LastCmdNumberExecuted

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_PacketEntities.cs#L48)

```csharp
uint LastCmdNumberExecuted { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### LastCmdNumberRecvDelta

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_PacketEntities.cs#L51)

```csharp
int LastCmdNumberRecvDelta { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### LegacyIsDelta

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_PacketEntities.cs#L24)

```csharp
bool LegacyIsDelta { get; set; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### MaxEntries

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_PacketEntities.cs#L18)

```csharp
int MaxEntries { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### MaxSpawngroupCreationsequence

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_PacketEntities.cs#L45)

```csharp
uint MaxSpawngroupCreationsequence { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### NonTransmittedEntities

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_PacketEntities.cs#L69)

```csharp
CSVCMsg_PacketEntities_non_transmitted_entities_t NonTransmittedEntities { get; }
```

#### Property Value

- [CSVCMsg_PacketEntities_non_transmitted_entities_t](/docs/api/protobufdefinitions/csvcmsg_packetentities_non_transmitted_entities_t)

### OutofpvsEntityUpdates

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_PacketEntities.cs#L78)

```csharp
CSVCMsg_PacketEntities_outofpvs_entity_updates_t OutofpvsEntityUpdates { get; }
```

#### Property Value

- [CSVCMsg_PacketEntities_outofpvs_entity_updates_t](/docs/api/protobufdefinitions/csvcmsg_packetentities_outofpvs_entity_updates_t)

### PendingFullFrame

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_PacketEntities.cs#L39)

```csharp
bool PendingFullFrame { get; set; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### SerializedEntities

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_PacketEntities.cs#L57)

```csharp
byte[] SerializedEntities { get; set; }
```

#### Property Value

- [byte](https://learn.microsoft.com/dotnet/api/system.byte)[]

### ServerTick

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_PacketEntities.cs#L54)

```csharp
uint ServerTick { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### UpdateBaseline

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_PacketEntities.cs#L27)

```csharp
bool UpdateBaseline { get; set; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### UpdatedEntries

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CSVCMsg_PacketEntities.cs#L21)

```csharp
int UpdatedEntries { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

