---
title: OperationalStatisticsPacket
---

# Interface OperationalStatisticsPacket

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/OperationalStatisticsPacket.cs#L8)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface OperationalStatisticsPacket : ITypedProtobuf<OperationalStatisticsPacket>, INativeHandle
```

#### Implements

- [ITypedProtobuf<OperationalStatisticsPacket>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Mstimestamp

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/OperationalStatisticsPacket.cs#L16)

```csharp
int Mstimestamp { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Packetid

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/OperationalStatisticsPacket.cs#L13)

```csharp
int Packetid { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Values

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/OperationalStatisticsPacket.cs#L19)

```csharp
IProtobufRepeatedFieldSubMessageType<OperationalStatisticElement> Values { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/netmessages/iprotobufrepeatedfieldsubmessagetypet)<[OperationalStatisticElement](/docs/api/protobufdefinitions/operationalstatisticelement)>

