---
title: CPathQueryUtil
---

```csharp
public interface CPathQueryUtil : ISchemaClass<CPathQueryUtil>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### **IsClosedLoop** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPathQueryUtil.cs#L24)

```csharp
ref bool IsClosedLoop { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **PathSampleDistances** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPathQueryUtil.cs#L22)

```csharp
ref CUtlVector<float> PathSampleDistances { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[float](https://learn.microsoft.com/dotnet/api/system.single)>

### **PathSampleParameters** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPathQueryUtil.cs#L20)

```csharp
ref CUtlVector<float> PathSampleParameters { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[float](https://learn.microsoft.com/dotnet/api/system.single)>

### **PathSamplePositions** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPathQueryUtil.cs#L18)

```csharp
ref CUtlVector<Vector> PathSamplePositions { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[Vector](/docs/api/shared/natives/vector)>

### **PathToEntityTransform** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CPathQueryUtil.cs#L16)

```csharp
ref CTransform PathToEntityTransform { get; }
```

#### Property Value

- [CTransform](/docs/api/shared/natives/ctransform)

