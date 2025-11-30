---
title: CCSUsrMsg_PlayerStatsUpdate
---

# Interface CCSUsrMsg_PlayerStatsUpdate

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_PlayerStatsUpdate.cs#L9)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CCSUsrMsg_PlayerStatsUpdate : ITypedProtobuf<CCSUsrMsg_PlayerStatsUpdate>, INativeHandle, INetMessage<CCSUsrMsg_PlayerStatsUpdate>, IDisposable
```

#### Implements

- [ITypedProtobuf<CCSUsrMsg_PlayerStatsUpdate>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)
- [INetMessage<CCSUsrMsg_PlayerStatsUpdate>](/docs/api/netmessages/inetmessaget)
- [IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

## Properties

### Crc

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_PlayerStatsUpdate.cs#L27)

```csharp
int Crc { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Ehandle

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_PlayerStatsUpdate.cs#L24)

```csharp
uint Ehandle { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### Stats

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_PlayerStatsUpdate.cs#L21)

```csharp
IProtobufRepeatedFieldSubMessageType<CCSUsrMsg_PlayerStatsUpdate_Stat> Stats { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/netmessages/iprotobufrepeatedfieldsubmessagetypet)<[CCSUsrMsg_PlayerStatsUpdate_Stat](/docs/api/protobufdefinitions/ccsusrmsg_playerstatsupdate_stat)>

### Version

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_PlayerStatsUpdate.cs#L18)

```csharp
int Version { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

