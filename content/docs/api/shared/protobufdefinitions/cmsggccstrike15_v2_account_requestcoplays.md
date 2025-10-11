---
title: CMsgGCCStrike15_v2_Account_RequestCoPlays
---

```csharp
public interface CMsgGCCStrike15_v2_Account_RequestCoPlays : ITypedProtobuf<CMsgGCCStrike15_v2_Account_RequestCoPlays>, INativeHandle
```

#### Implements

## Properties

### **Players** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_Account_RequestCoPlays.cs#L13)

```csharp
IProtobufRepeatedFieldSubMessageType<CMsgGCCStrike15_v2_Account_RequestCoPlays_Player> Players { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/shared/netmessages/iprotobufrepeatedfieldsubmessagetype-1)<[CMsgGCCStrike15_v2_Account_RequestCoPlays_Player](/docs/api/shared/protobufdefinitions/cmsggccstrike15_v2_account_requestcoplays_player)>

### **Servertime** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgGCCStrike15_v2_Account_RequestCoPlays.cs#L16)

```csharp
uint Servertime { get; set; }
```

#### Property Value

- [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

