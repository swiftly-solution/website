---
title: ModelSkeletonData_t
---

```csharp
public interface ModelSkeletonData_t : ISchemaClass<ModelSkeletonData_t>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### **BoneName** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ModelSkeletonData_t.cs#L16)

```csharp
ref CUtlVector<CUtlString> BoneName { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[CUtlString](/docs/api/shared/natives/cutlstring)>

### **BonePosParent** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ModelSkeletonData_t.cs#L24)

```csharp
ref CUtlVector<Vector> BonePosParent { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[Vector](/docs/api/shared/natives/vector)>

### **BoneRotParent** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ModelSkeletonData_t.cs#L27)

```csharp
ref CUtlVector BoneRotParent { get; }
```

#### Property Value

- [CUtlVector](/docs/api/)

### **BoneScaleParent** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ModelSkeletonData_t.cs#L29)

```csharp
ref CUtlVector<float> BoneScaleParent { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[float](https://learn.microsoft.com/dotnet/api/system.single)>

### **BoneSphere** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ModelSkeletonData_t.cs#L20)

```csharp
ref CUtlVector<float> BoneSphere { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[float](https://learn.microsoft.com/dotnet/api/system.single)>

### **Flag** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ModelSkeletonData_t.cs#L22)

```csharp
ref CUtlVector<uint> Flag { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)>

### **Parent** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/ModelSkeletonData_t.cs#L18)

```csharp
ref CUtlVector<short> Parent { get; }
```

#### Property Value

- [CUtlVector](/docs/api/-1)<[short](https://learn.microsoft.com/dotnet/api/system.int16)>

