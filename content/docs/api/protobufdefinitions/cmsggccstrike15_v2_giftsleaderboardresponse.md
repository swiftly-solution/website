---
title: CMsgGCCStrike15_v2_GiftsLeaderboardResponse
---

# Interface CMsgGCCStrike15_v2_GiftsLeaderboardResponse

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_GiftsLeaderboardResponse.cs#L8)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CMsgGCCStrike15_v2_GiftsLeaderboardResponse : ITypedProtobuf<CMsgGCCStrike15_v2_GiftsLeaderboardResponse>, INativeHandle
```

#### Implements

- [ITypedProtobuf<CMsgGCCStrike15_v2_GiftsLeaderboardResponse>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Entries

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_GiftsLeaderboardResponse.cs#L25)

```csharp
IProtobufRepeatedFieldSubMessageType<CMsgGCCStrike15_v2_GiftsLeaderboardResponse_GiftLeaderboardEntry> Entries { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/netmessages/iprotobufrepeatedfieldsubmessagetypet)<[CMsgGCCStrike15_v2_GiftsLeaderboardResponse_GiftLeaderboardEntry](/docs/api/protobufdefinitions/cmsggccstrike15_v2_giftsleaderboardresponse_giftleaderboardentry)>

### Servertime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_GiftsLeaderboardResponse.cs#L13)

```csharp
uint Servertime { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### TimePeriodSeconds

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_GiftsLeaderboardResponse.cs#L16)

```csharp
uint TimePeriodSeconds { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### TotalGiftsGiven

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_GiftsLeaderboardResponse.cs#L19)

```csharp
uint TotalGiftsGiven { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### TotalGivers

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_GiftsLeaderboardResponse.cs#L22)

```csharp
uint TotalGivers { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

