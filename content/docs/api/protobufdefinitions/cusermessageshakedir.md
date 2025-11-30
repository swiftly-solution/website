---
title: CUserMessageShakeDir
---

# Interface CUserMessageShakeDir

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CUserMessageShakeDir.cs#L9)

**Namespace**: [SwiftlyS2.Shared.ProtobufDefinitions](/docs/api/protobufdefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CUserMessageShakeDir : ITypedProtobuf<CUserMessageShakeDir>, INativeHandle, INetMessage<CUserMessageShakeDir>, IDisposable
```

#### Implements

- [ITypedProtobuf<CUserMessageShakeDir>](/docs/api/netmessages/itypedprotobuft)
- [INativeHandle](/docs/api/natives/inativehandle)
- [INetMessage<CUserMessageShakeDir>](/docs/api/netmessages/inetmessaget)
- [IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

## Properties

### Direction

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CUserMessageShakeDir.cs#L21)

```csharp
Vector Direction { get; set; }
```

#### Property Value

- [Vector](/docs/api/natives/vector)

### Shake

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CUserMessageShakeDir.cs#L18)

```csharp
CUserMessageShake Shake { get; }
```

#### Property Value

- [CUserMessageShake](/docs/api/protobufdefinitions/cusermessageshake)

