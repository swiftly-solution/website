---
title: CMsgGCCStrike15_v2_MatchmakingGC2ClientUpdate
---

# Interface CMsgGCCStrike15_v2_MatchmakingGC2ClientUpdate

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingGC2ClientUpdate.cs#L8)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CMsgGCCStrike15_v2_MatchmakingGC2ClientUpdate : ITypedProtobuf<CMsgGCCStrike15_v2_MatchmakingGC2ClientUpdate>, INativeHandle
```

#### Implements

- [ITypedProtobuf<CMsgGCCStrike15_v2_MatchmakingGC2ClientUpdate>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Error

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingGC2ClientUpdate.cs#L19)

```csharp
string Error { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### FailpingAccountIdSessions

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingGC2ClientUpdate.cs#L28)

```csharp
IProtobufRepeatedFieldValueType<uint> FailpingAccountIdSessions { get; }
```

#### Property Value

- [IProtobufRepeatedFieldValueType](/docs/api/netmessages/iprotobufrepeatedfieldvaluetypet)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)>

### FailreadyAccountIdSessions

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingGC2ClientUpdate.cs#L34)

```csharp
IProtobufRepeatedFieldValueType<uint> FailreadyAccountIdSessions { get; }
```

#### Property Value

- [IProtobufRepeatedFieldValueType](/docs/api/netmessages/iprotobufrepeatedfieldvaluetypet)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)>

### GlobalStats

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingGC2ClientUpdate.cs#L25)

```csharp
GlobalStatistics GlobalStats { get; }
```

#### Property Value

- [GlobalStatistics](/docs/api/protobufdefinitions/globalstatistics)

### InsecureAccountIdSessions

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingGC2ClientUpdate.cs#L58)

```csharp
IProtobufRepeatedFieldValueType<uint> InsecureAccountIdSessions { get; }
```

#### Property Value

- [IProtobufRepeatedFieldValueType](/docs/api/netmessages/iprotobufrepeatedfieldvaluetypet)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)>

### InsufficientlevelSessions

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingGC2ClientUpdate.cs#L49)

```csharp
IProtobufRepeatedFieldValueType<uint> InsufficientlevelSessions { get; }
```

#### Property Value

- [IProtobufRepeatedFieldValueType](/docs/api/netmessages/iprotobufrepeatedfieldvaluetypet)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)>

### LauncherMismatchSessions

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingGC2ClientUpdate.cs#L55)

```csharp
IProtobufRepeatedFieldValueType<uint> LauncherMismatchSessions { get; }
```

#### Property Value

- [IProtobufRepeatedFieldValueType](/docs/api/netmessages/iprotobufrepeatedfieldvaluetypet)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)>

### Matchmaking

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingGC2ClientUpdate.cs#L13)

```csharp
int Matchmaking { get; set; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### Notes

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingGC2ClientUpdate.cs#L43)

```csharp
IProtobufRepeatedFieldSubMessageType<CMsgGCCStrike15_v2_MatchmakingGC2ClientUpdate_Note> Notes { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/netmessages/iprotobufrepeatedfieldsubmessagetypet)<[CMsgGCCStrike15_v2_MatchmakingGC2ClientUpdate_Note](/docs/api/protobufdefinitions/cmsggccstrike15_v2_matchmakinggc2clientupdate_note)>

### OngoingmatchAccountIdSessions

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingGC2ClientUpdate.cs#L22)

```csharp
IProtobufRepeatedFieldValueType<uint> OngoingmatchAccountIdSessions { get; }
```

#### Property Value

- [IProtobufRepeatedFieldValueType](/docs/api/netmessages/iprotobufrepeatedfieldvaluetypet)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)>

### PenaltyAccountIdSessions

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingGC2ClientUpdate.cs#L31)

```csharp
IProtobufRepeatedFieldValueType<uint> PenaltyAccountIdSessions { get; }
```

#### Property Value

- [IProtobufRepeatedFieldValueType](/docs/api/netmessages/iprotobufrepeatedfieldvaluetypet)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)>

### PenaltyAccountIdSessionsGreen

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingGC2ClientUpdate.cs#L46)

```csharp
IProtobufRepeatedFieldValueType<uint> PenaltyAccountIdSessionsGreen { get; }
```

#### Property Value

- [IProtobufRepeatedFieldValueType](/docs/api/netmessages/iprotobufrepeatedfieldvaluetypet)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)>

### ServerIpaddressMask

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingGC2ClientUpdate.cs#L40)

```csharp
IpAddressMask ServerIpaddressMask { get; }
```

#### Property Value

- [IpAddressMask](/docs/api/protobufdefinitions/ipaddressmask)

### VacbannedAccountIdSessions

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingGC2ClientUpdate.cs#L37)

```csharp
IProtobufRepeatedFieldValueType<uint> VacbannedAccountIdSessions { get; }
```

#### Property Value

- [IProtobufRepeatedFieldValueType](/docs/api/netmessages/iprotobufrepeatedfieldvaluetypet)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)>

### VsncheckAccountIdSessions

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingGC2ClientUpdate.cs#L52)

```csharp
IProtobufRepeatedFieldValueType<uint> VsncheckAccountIdSessions { get; }
```

#### Property Value

- [IProtobufRepeatedFieldValueType](/docs/api/netmessages/iprotobufrepeatedfieldvaluetypet)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)>

### WaitingAccountIdSessions

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_MatchmakingGC2ClientUpdate.cs#L16)

```csharp
IProtobufRepeatedFieldValueType<uint> WaitingAccountIdSessions { get; }
```

#### Property Value

- [IProtobufRepeatedFieldValueType](/docs/api/netmessages/iprotobufrepeatedfieldvaluetypet)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)>

