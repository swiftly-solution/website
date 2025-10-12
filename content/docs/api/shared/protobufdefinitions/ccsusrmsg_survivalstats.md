---
title: CCSUsrMsg_SurvivalStats
---

```csharp
public interface CCSUsrMsg_SurvivalStats : ITypedProtobuf<CCSUsrMsg_SurvivalStats>, INativeHandle, INetMessage<CCSUsrMsg_SurvivalStats>, IDisposable
```

#### Implements

## Properties

### Damages

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_SurvivalStats.cs#L27)

```csharp
IProtobufRepeatedFieldSubMessageType<CCSUsrMsg_SurvivalStats_Damage> Damages { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/shared/netmessages/iprotobufrepeatedfieldsubmessagetype-1)<[CCSUsrMsg_SurvivalStats_Damage](/docs/api/shared/protobufdefinitions/ccsusrmsg_survivalstats_damage)>

### Facts

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_SurvivalStats.cs#L21)

```csharp
IProtobufRepeatedFieldSubMessageType<CCSUsrMsg_SurvivalStats_Fact> Facts { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/shared/netmessages/iprotobufrepeatedfieldsubmessagetype-1)<[CCSUsrMsg_SurvivalStats_Fact](/docs/api/shared/protobufdefinitions/ccsusrmsg_survivalstats_fact)>

### Ticknumber

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_SurvivalStats.cs#L30)

```csharp
int Ticknumber { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Users

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_SurvivalStats.cs#L24)

```csharp
IProtobufRepeatedFieldSubMessageType<CCSUsrMsg_SurvivalStats_Placement> Users { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/shared/netmessages/iprotobufrepeatedfieldsubmessagetype-1)<[CCSUsrMsg_SurvivalStats_Placement](/docs/api/shared/protobufdefinitions/ccsusrmsg_survivalstats_placement)>

### Xuid

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_SurvivalStats.cs#L18)

```csharp
ulong Xuid { get; set; }
```

#### Property Value

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

