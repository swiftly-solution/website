---
title: CNmRootMotionData
---

```csharp
public interface CNmRootMotionData : ISchemaClass<CNmRootMotionData>, ISchemaField, ISchemaClass, INativeHandle
```

- Implements

## Properties

### **AverageAngularVelocityRadians** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmRootMotionData.cs#L22)

```csharp
ref float AverageAngularVelocityRadians { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **AverageLinearVelocity** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmRootMotionData.cs#L20)

```csharp
ref float AverageLinearVelocity { get; }
```

- Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **NumFrames** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmRootMotionData.cs#L18)

```csharp
ref int NumFrames { get; }
```

- Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### **TotalDelta** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmRootMotionData.cs#L24)

```csharp
ref CTransform TotalDelta { get; }
```

- Property Value

- [CTransform](/docs/api/shared/natives/ctransform)

### **Transforms** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmRootMotionData.cs#L16)

```csharp
ref CUtlVector<CTransform> Transforms { get; }
```

- Property Value

- [CUtlVector](/docs/api/-1)<[CTransform](/docs/api/shared/natives/ctransform)>

