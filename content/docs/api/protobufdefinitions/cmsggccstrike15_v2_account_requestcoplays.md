---
title: CMsgGCCStrike15_v2_Account_RequestCoPlays
---

# Interface CMsgGCCStrike15_v2_Account_RequestCoPlays

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_Account_RequestCoPlays.cs#L8)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CMsgGCCStrike15_v2_Account_RequestCoPlays : ITypedProtobuf<CMsgGCCStrike15_v2_Account_RequestCoPlays>, INativeHandle
```

#### Implements

- [ITypedProtobuf<CMsgGCCStrike15_v2_Account_RequestCoPlays>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Players

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_Account_RequestCoPlays.cs#L13)

```csharp
IProtobufRepeatedFieldSubMessageType<CMsgGCCStrike15_v2_Account_RequestCoPlays_Player> Players { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/netmessages/iprotobufrepeatedfieldsubmessagetypet)<[CMsgGCCStrike15_v2_Account_RequestCoPlays_Player](/docs/api/protobufdefinitions/cmsggccstrike15_v2_account_requestcoplays_player)>

### Servertime

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_Account_RequestCoPlays.cs#L16)

```csharp
uint Servertime { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

