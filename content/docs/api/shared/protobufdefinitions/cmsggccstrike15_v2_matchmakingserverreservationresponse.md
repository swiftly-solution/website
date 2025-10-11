---
title: CMsgGCCStrike15_v2_MatchmakingServerReservationResponse
---

```csharp
public interface CMsgGCCStrike15_v2_MatchmakingServerReservationResponse : ITypedProtobuf<CMsgGCCStrike15_v2_MatchmakingServerReservationResponse>, INativeHandle
```

#### Implements

## Properties

### **CpusOnline** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingServerReservationResponse.cs#L67)

```csharp
uint CpusOnline { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### **Flags** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingServerReservationResponse.cs#L61)

```csharp
uint Flags { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### **GcReservationSent** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingServerReservationResponse.cs#L22)

```csharp
ulong GcReservationSent { get; set; }
```

#### Property Value

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

### **IdlePlayerAccounts** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingServerReservationResponse.cs#L34)

```csharp
IProtobufRepeatedFieldValueType<uint> IdlePlayerAccounts { get; }
```

#### Property Value

- [IProtobufRepeatedFieldValueType](/docs/api/shared/netmessages/iprotobufrepeatedfieldvaluetype-1)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)>

### **LegacySteamdatagramPort** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingServerReservationResponse.cs#L52)

```csharp
uint LegacySteamdatagramPort { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### **Map** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingServerReservationResponse.cs#L19)

```csharp
string Map { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### **Reservation** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingServerReservationResponse.cs#L16)

```csharp
CMsgGCCStrike15_v2_MatchmakingGC2ServerReserve Reservation { get; }
```

#### Property Value

- [CMsgGCCStrike15_v2_MatchmakingGC2ServerReserve](/docs/api/shared/protobufdefinitions/cmsggccstrike15_v2_matchmakinggc2serverreserve)

### **Reservationid** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingServerReservationResponse.cs#L13)

```csharp
ulong Reservationid { get; set; }
```

#### Property Value

- [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

### **RewardDropList** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingServerReservationResponse.cs#L46)

```csharp
uint RewardDropList { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### **RewardItemAttrDefIdx** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingServerReservationResponse.cs#L37)

```csharp
uint RewardItemAttrDefIdx { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### **RewardItemAttrRewardIdx** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingServerReservationResponse.cs#L43)

```csharp
uint RewardItemAttrRewardIdx { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### **RewardItemAttrValue** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingServerReservationResponse.cs#L40)

```csharp
uint RewardItemAttrValue { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### **RewardPlayerAccounts** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingServerReservationResponse.cs#L31)

```csharp
IProtobufRepeatedFieldValueType<uint> RewardPlayerAccounts { get; }
```

#### Property Value

- [IProtobufRepeatedFieldValueType](/docs/api/shared/netmessages/iprotobufrepeatedfieldvaluetype-1)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)>

### **ServerVersion** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingServerReservationResponse.cs#L25)

```csharp
uint ServerVersion { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### **SteamdatagramRouting** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingServerReservationResponse.cs#L55)

```csharp
uint SteamdatagramRouting { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### **SystemLoad** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingServerReservationResponse.cs#L64)

```csharp
uint SystemLoad { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### **TestToken** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingServerReservationResponse.cs#L58)

```csharp
uint TestToken { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### **TournamentTag** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingServerReservationResponse.cs#L49)

```csharp
string TournamentTag { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### **TvInfo** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingServerReservationResponse.cs#L28)

```csharp
ServerHltvInfo TvInfo { get; }
```

#### Property Value

- [ServerHltvInfo](/docs/api/shared/protobufdefinitions/serverhltvinfo)

