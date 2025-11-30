---
title: CCSUsrMsg_VGUIMenu
---

# Interface CCSUsrMsg_VGUIMenu

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_VGUIMenu.cs#L9)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CCSUsrMsg_VGUIMenu : ITypedProtobuf<CCSUsrMsg_VGUIMenu>, INativeHandle, INetMessage<CCSUsrMsg_VGUIMenu>, IDisposable
```

#### Implements

- [ITypedProtobuf<CCSUsrMsg_VGUIMenu>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)
- [INetMessage<CCSUsrMsg_VGUIMenu>](/docs/api/netmessages/inetmessaget)
- [IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

## Properties

### Keys

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_VGUIMenu.cs#L24)

```csharp
IProtobufRepeatedFieldSubMessageType<CCSUsrMsg_VGUIMenu_Keys> Keys { get; }
```

#### Property Value

- [IProtobufRepeatedFieldSubMessageType](/docs/api/netmessages/iprotobufrepeatedfieldsubmessagetypet)<[CCSUsrMsg_VGUIMenu_Keys](/docs/api/protobufdefinitions/ccsusrmsg_vguimenu_keys)>

### Name

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_VGUIMenu.cs#L18)

```csharp
string Name { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### Show

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CCSUsrMsg_VGUIMenu.cs#L21)

```csharp
bool Show { get; set; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

