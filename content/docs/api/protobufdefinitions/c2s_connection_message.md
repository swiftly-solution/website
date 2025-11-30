---
title: C2S_CONNECTION_Message
---

# Interface C2S_CONNECTION_Message

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/C2S_CONNECTION_Message.cs#L8)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface C2S_CONNECTION_Message : ITypedProtobuf<C2S_CONNECTION_Message>, INativeHandle
```

#### Implements

- [ITypedProtobuf<C2S_CONNECTION_Message>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### AddonName

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/C2S_CONNECTION_Message.cs#L13)

```csharp
string AddonName { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### LocalhostSameProcessCheck

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/C2S_CONNECTION_Message.cs#L16)

```csharp
C2S_CONNECT_SameProcessCheck LocalhostSameProcessCheck { get; }
```

#### Property Value

- [C2S_CONNECT_SameProcessCheck](/docs/api/protobufdefinitions/c2s_connect_sameprocesscheck)

