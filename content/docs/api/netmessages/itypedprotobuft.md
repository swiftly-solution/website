---
title: ITypedProtobuf
---

# Interface ITypedProtobuf

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/NetMessages/ITypedProtobuf.cs#L6)

**Namespace**: [SwiftlyS2.Shared.NetMessages](/docs/api/netmessages)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface ITypedProtobuf<T> : INativeHandle where T : ITypedProtobuf<T>
```

#### Type Parameters

- **T**: 

#### Implements

- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### Accessor

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/NetMessages/ITypedProtobuf.cs#L8)

```csharp
IProtobufAccessor Accessor { get; }
```

#### Property Value

- [IProtobufAccessor](/docs/api/netmessages/iprotobufaccessor)

