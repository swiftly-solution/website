---
title: CMsgGCCStrike15_v2_PremierSeasonSummary
---

# Interface CMsgGCCStrike15_v2_PremierSeasonSummary

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_PremierSeasonSummary.cs#L8)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CMsgGCCStrike15_v2_PremierSeasonSummary : ITypedProtobuf<CMsgGCCStrike15_v2_PremierSeasonSummary>, INativeHandle
```

#### Implements

- [ITypedProtobuf<CMsgGCCStrike15_v2_PremierSeasonSummary>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### AccountId

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_PremierSeasonSummary.cs#L13)

```csharp
uint AccountId { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### DataPerMap

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_PremierSeasonSummary.cs#L22)

```csharp
IProtobufRepeatedFieldSubMessageType<CMsgGCCStrike15_v2_PremierSeasonSummary_DataPerMap> DataPerMap { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/netmessages/iprotobufrepeatedfieldsubmessagetypet)<[CMsgGCCStrike15_v2_PremierSeasonSummary_DataPerMap](/docs/api/protobufdefinitions/cmsggccstrike15_v2_premierseasonsummary_datapermap)>

### DataPerWeek

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_PremierSeasonSummary.cs#L19)

```csharp
IProtobufRepeatedFieldSubMessageType<CMsgGCCStrike15_v2_PremierSeasonSummary_DataPerWeek> DataPerWeek { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/netmessages/iprotobufrepeatedfieldsubmessagetypet)<[CMsgGCCStrike15_v2_PremierSeasonSummary_DataPerWeek](/docs/api/protobufdefinitions/cmsggccstrike15_v2_premierseasonsummary_dataperweek)>

### SeasonId

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_PremierSeasonSummary.cs#L16)

```csharp
uint SeasonId { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

