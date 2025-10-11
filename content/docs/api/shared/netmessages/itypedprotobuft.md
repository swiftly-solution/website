---
title: ITypedProtobuf<T>
---

```csharp
public interface ITypedProtobuf<T> : INativeHandle where T : ITypedProtobuf<T>
```

#### Type Parameters

- **T**: 

#### Implements

## Properties

### **Accessor** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/NetMessages/ITypedProtobuf.cs#L8)

```csharp
IProtobufAccessor Accessor { get; }
```

#### Property Value

- [IProtobufAccessor](/docs/api/shared/netmessages/iprotobufaccessor)

