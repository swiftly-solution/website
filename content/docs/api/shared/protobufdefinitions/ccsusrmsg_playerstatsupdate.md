---
title: CCSUsrMsg_PlayerStatsUpdate
---

```csharp
public interface CCSUsrMsg_PlayerStatsUpdate : ITypedProtobuf<CCSUsrMsg_PlayerStatsUpdate>, INativeHandle, INetMessage<CCSUsrMsg_PlayerStatsUpdate>, IDisposable
```

#### Implements

## Properties

**Crc** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_PlayerStatsUpdate.cs#L27)

```csharp
int Crc { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

**Ehandle** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_PlayerStatsUpdate.cs#L24)

```csharp
uint Ehandle { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

**Stats** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_PlayerStatsUpdate.cs#L21)

```csharp
IProtobufRepeatedFieldSubMessageType<CCSUsrMsg_PlayerStatsUpdate_Stat> Stats { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/shared/netmessages/iprotobufrepeatedfieldsubmessagetype-1)<[CCSUsrMsg_PlayerStatsUpdate_Stat](/docs/api/shared/protobufdefinitions/ccsusrmsg_playerstatsupdate_stat)>

**Version** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_PlayerStatsUpdate.cs#L18)

```csharp
int Version { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

