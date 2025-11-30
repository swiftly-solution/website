---
title: CCSUsrMsg_VoiceMask
---

# Interface CCSUsrMsg_VoiceMask

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_VoiceMask.cs#L9)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CCSUsrMsg_VoiceMask : ITypedProtobuf<CCSUsrMsg_VoiceMask>, INativeHandle, INetMessage<CCSUsrMsg_VoiceMask>, IDisposable
```

#### Implements

- [ITypedProtobuf<CCSUsrMsg_VoiceMask>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)
- [INetMessage<CCSUsrMsg_VoiceMask>](/docs/api/netmessages/inetmessaget)
- [IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

## Properties

### PlayerMasks

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_VoiceMask.cs#L18)

```csharp
IProtobufRepeatedFieldSubMessageType<CCSUsrMsg_VoiceMask_PlayerMask> PlayerMasks { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/netmessages/iprotobufrepeatedfieldsubmessagetypet)<[CCSUsrMsg_VoiceMask_PlayerMask](/docs/api/protobufdefinitions/ccsusrmsg_voicemask_playermask)>

### PlayerModEnable

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_VoiceMask.cs#L21)

```csharp
bool PlayerModEnable { get; set; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

