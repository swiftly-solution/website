---
title: CGameInfo_CDotaGameInfo
---

```csharp
public interface CGameInfo_CDotaGameInfo : ITypedProtobuf<CGameInfo_CDotaGameInfo>, INativeHandle
```

#### Implements

## Properties

### DireTeamId

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CGameInfo_CDotaGameInfo.cs#L34)

```csharp
uint DireTeamId { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### DireTeamTag

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CGameInfo_CDotaGameInfo.cs#L40)

```csharp
string DireTeamTag { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### EndTime

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CGameInfo_CDotaGameInfo.cs#L43)

```csharp
uint EndTime { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### GameMode

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CGameInfo_CDotaGameInfo.cs#L16)

```csharp
int GameMode { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### GameWinner

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CGameInfo_CDotaGameInfo.cs#L19)

```csharp
int GameWinner { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Leagueid

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CGameInfo_CDotaGameInfo.cs#L25)

```csharp
uint Leagueid { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### MatchId

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CGameInfo_CDotaGameInfo.cs#L13)

```csharp
ulong MatchId { get; set; }
```

#### Property Value

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

### PicksBans

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CGameInfo_CDotaGameInfo.cs#L28)

```csharp
IProtobufRepeatedFieldSubMessageType<CGameInfo_CDotaGameInfo_CHeroSelectEvent> PicksBans { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/shared/netmessages/iprotobufrepeatedfieldsubmessagetype-1)<[CGameInfo_CDotaGameInfo_CHeroSelectEvent](/docs/api/shared/protobufdefinitions/cgameinfo_cdotagameinfo_cheroselectevent)>

### PlayerInfo

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CGameInfo_CDotaGameInfo.cs#L22)

```csharp
IProtobufRepeatedFieldSubMessageType<CGameInfo_CDotaGameInfo_CPlayerInfo> PlayerInfo { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/shared/netmessages/iprotobufrepeatedfieldsubmessagetype-1)<[CGameInfo_CDotaGameInfo_CPlayerInfo](/docs/api/shared/protobufdefinitions/cgameinfo_cdotagameinfo_cplayerinfo)>

### RadiantTeamId

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CGameInfo_CDotaGameInfo.cs#L31)

```csharp
uint RadiantTeamId { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### RadiantTeamTag

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CGameInfo_CDotaGameInfo.cs#L37)

```csharp
string RadiantTeamTag { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

