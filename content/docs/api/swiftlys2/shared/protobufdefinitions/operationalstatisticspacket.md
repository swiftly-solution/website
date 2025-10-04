---
title: OperationalStatisticsPacket
---

```csharp
public interface OperationalStatisticsPacket : ITypedProtobuf<OperationalStatisticsPacket>, INativeHandle
```

#### Implements

## Properties

**Mstimestamp** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/OperationalStatisticsPacket.cs#L16)

```csharp
int Mstimestamp { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**Packetid** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/OperationalStatisticsPacket.cs#L13)

```csharp
int Packetid { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**Values** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/OperationalStatisticsPacket.cs#L19)

```csharp
IProtobufRepeatedFieldSubMessageType<OperationalStatisticElement> Values { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/shared/netmessages/iprotobufrepeatedfieldsubmessagetype-1)<[OperationalStatisticElement](/docs/api/shared/protobufdefinitions/operationalstatisticelement)>

