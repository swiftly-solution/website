---
title: CCSUsrMsg_VoiceMask
---

```csharp
public interface CCSUsrMsg_VoiceMask : ITypedProtobuf<CCSUsrMsg_VoiceMask>, INativeHandle, INetMessage<CCSUsrMsg_VoiceMask>, IDisposable
```

#### Implements

## Properties

### **PlayerMasks** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_VoiceMask.cs#L18)

```csharp
IProtobufRepeatedFieldSubMessageType<CCSUsrMsg_VoiceMask_PlayerMask> PlayerMasks { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/shared/netmessages/iprotobufrepeatedfieldsubmessagetype-1)<[CCSUsrMsg_VoiceMask_PlayerMask](/docs/api/shared/protobufdefinitions/ccsusrmsg_voicemask_playermask)>

### **PlayerModEnable** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_VoiceMask.cs#L21)

```csharp
bool PlayerModEnable { get; set; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

