---
title: CAnimReplayFrame
---

```csharp
public interface CAnimReplayFrame : ISchemaClass<CAnimReplayFrame>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### **InputDataBlocks** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimReplayFrame.cs#L16)

```csharp
ref CUtlVector<CUtlBinaryBlock> InputDataBlocks { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CUtlBinaryBlock](/docs/api/shared/natives/cutlbinaryblock)>

### **InstanceData** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimReplayFrame.cs#L18)

```csharp
ref CUtlBinaryBlock InstanceData { get; }
```

#### Property Value

- [CUtlBinaryBlock](/docs/api/shared/natives/cutlbinaryblock)

### **LocalToWorldTransform** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimReplayFrame.cs#L22)

```csharp
ref CTransform LocalToWorldTransform { get; }
```

#### Property Value

- [CTransform](/docs/api/shared/natives/ctransform)

### **StartingLocalToWorldTransform** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimReplayFrame.cs#L20)

```csharp
ref CTransform StartingLocalToWorldTransform { get; }
```

#### Property Value

- [CTransform](/docs/api/shared/natives/ctransform)

### **TimeStamp** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimReplayFrame.cs#L24)

```csharp
ref float TimeStamp { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

