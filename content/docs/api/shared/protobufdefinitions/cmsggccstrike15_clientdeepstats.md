---
title: CMsgGCCStrike15_ClientDeepStats
---

```csharp
public interface CMsgGCCStrike15_ClientDeepStats : ITypedProtobuf<CMsgGCCStrike15_ClientDeepStats>, INativeHandle
```

- Implements

## Properties

### **AccountId** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_ClientDeepStats.cs#L13)

```csharp
uint AccountId { get; set; }
```

- Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### **Matches** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_ClientDeepStats.cs#L19)

```csharp
IProtobufRepeatedFieldSubMessageType<CMsgGCCStrike15_ClientDeepStats_DeepStatsMatch> Matches { get; }
```

- Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/shared/netmessages/iprotobufrepeatedfieldsubmessagetype-1)<[CMsgGCCStrike15_ClientDeepStats_DeepStatsMatch](/docs/api/shared/protobufdefinitions/cmsggccstrike15_clientdeepstats_deepstatsmatch)>

### **Range** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_ClientDeepStats.cs#L16)

```csharp
CMsgGCCStrike15_ClientDeepStats_DeepStatsRange Range { get; }
```

- Property Value

- [CMsgGCCStrike15_ClientDeepStats_DeepStatsRange](/docs/api/shared/protobufdefinitions/cmsggccstrike15_clientdeepstats_deepstatsrange)

