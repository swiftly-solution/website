---
title: CMsgTransform
---

```csharp
public interface CMsgTransform : ITypedProtobuf<CMsgTransform>, INativeHandle
```

- Implements

## Properties

### **Orientation** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgTransform.cs#L19)

```csharp
CMsgQuaternion Orientation { get; }
```

- Property Value

- [CMsgQuaternion](/docs/api/shared/protobufdefinitions/cmsgquaternion)

### **Position** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgTransform.cs#L13)

```csharp
Vector Position { get; set; }
```

- Property Value

- [Vector](/docs/api/shared/natives/vector)

### **Scale** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Protobufs/Interfaces/CMsgTransform.cs#L16)

```csharp
float Scale { get; set; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

