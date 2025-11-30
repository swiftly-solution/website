---
title: CCSUsrMsg_SurvivalStats
---

# Interface CCSUsrMsg_SurvivalStats

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_SurvivalStats.cs#L9)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CCSUsrMsg_SurvivalStats : ITypedProtobuf<CCSUsrMsg_SurvivalStats>, INativeHandle, INetMessage<CCSUsrMsg_SurvivalStats>, IDisposable
```

#### Implements

- [ITypedProtobuf<CCSUsrMsg_SurvivalStats>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)
- [INetMessage<CCSUsrMsg_SurvivalStats>](/docs/api/netmessages/inetmessaget)
- [IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

## Properties

### Damages

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_SurvivalStats.cs#L27)

```csharp
IProtobufRepeatedFieldSubMessageType<CCSUsrMsg_SurvivalStats_Damage> Damages { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/netmessages/iprotobufrepeatedfieldsubmessagetypet)<[CCSUsrMsg_SurvivalStats_Damage](/docs/api/protobufdefinitions/ccsusrmsg_survivalstats_damage)>

### Facts

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_SurvivalStats.cs#L21)

```csharp
IProtobufRepeatedFieldSubMessageType<CCSUsrMsg_SurvivalStats_Fact> Facts { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/netmessages/iprotobufrepeatedfieldsubmessagetypet)<[CCSUsrMsg_SurvivalStats_Fact](/docs/api/protobufdefinitions/ccsusrmsg_survivalstats_fact)>

### Ticknumber

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_SurvivalStats.cs#L30)

```csharp
int Ticknumber { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Users

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_SurvivalStats.cs#L24)

```csharp
IProtobufRepeatedFieldSubMessageType<CCSUsrMsg_SurvivalStats_Placement> Users { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/netmessages/iprotobufrepeatedfieldsubmessagetypet)<[CCSUsrMsg_SurvivalStats_Placement](/docs/api/protobufdefinitions/ccsusrmsg_survivalstats_placement)>

### Xuid

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_SurvivalStats.cs#L18)

```csharp
ulong Xuid { get; set; }
```

#### Property Value

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

