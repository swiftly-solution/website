---
title: CMsgGCCStrike15_v2_MatchmakingStart
---

```csharp
public interface CMsgGCCStrike15_v2_MatchmakingStart : ITypedProtobuf<CMsgGCCStrike15_v2_MatchmakingStart>, INativeHandle
```

#### Implements

## Properties

### **AccountIds** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingStart.cs#L13)

```csharp
IProtobufRepeatedFieldValueType<uint> AccountIds { get; }
```

#### Property Value

- [IProtobufRepeatedFieldValueType](/docs/api/shared/netmessages/iprotobufrepeatedfieldvaluetype-1)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)>

### **ClientVersion** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingStart.cs#L22)

```csharp
uint ClientVersion { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### **GameType** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingStart.cs#L16)

```csharp
uint GameType { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### **LobbyId** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingStart.cs#L34)

```csharp
ulong LobbyId { get; set; }
```

#### Property Value

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

### **PrimeOnly** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingStart.cs#L28)

```csharp
bool PrimeOnly { get; set; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **TicketData** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingStart.cs#L19)

```csharp
string TicketData { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### **TournamentMatch** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingStart.cs#L25)

```csharp
TournamentMatchSetup TournamentMatch { get; }
```

#### Property Value

- [TournamentMatchSetup](/docs/api/shared/protobufdefinitions/tournamentmatchsetup)

### **TvControl** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingStart.cs#L31)

```csharp
uint TvControl { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

