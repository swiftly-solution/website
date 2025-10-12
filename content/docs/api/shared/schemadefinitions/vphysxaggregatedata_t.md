---
title: VPhysXAggregateData_t
---

```csharp
public interface VPhysXAggregateData_t : ISchemaClass<VPhysXAggregateData_t>, ISchemaField, ISchemaClass, INativeHandle
```

- Implements

## Properties

### **BindPose** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VPhysXAggregateData_t.cs#L28)

```csharp
ref CUtlVector<matrix3x4_t> BindPose { get; }
```

- Property Value

- [CUtlVector](/docs/api/-1)<[matrix3x4_t](/docs/api/shared/natives/matrix3x4_t)>

### **BoneNames** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VPhysXAggregateData_t.cs#L22)

```csharp
ref CUtlVector<CUtlString> BoneNames { get; }
```

- Property Value

- [CUtlVector](/docs/api/-1)<[CUtlString](/docs/api/shared/natives/cutlstring)>

### **BoneParents** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VPhysXAggregateData_t.cs#L44)

```csharp
ref CUtlVector<ushort> BoneParents { get; }
```

- Property Value

- [CUtlVector](/docs/api/-1)<[ushort](https://learn.microsoft.com/dotnet/api/system.uint16)>

### **BonesHash** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VPhysXAggregateData_t.cs#L20)

```csharp
ref CUtlVector<uint> BonesHash { get; }
```

- Property Value

- [CUtlVector](/docs/api/-1)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)>

### **CollisionAttributes** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VPhysXAggregateData_t.cs#L49)

```csharp
ref CUtlVector CollisionAttributes { get; }
```

- Property Value

- [CUtlVector](/docs/api/)

### **Constraints2** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VPhysXAggregateData_t.cs#L37)

```csharp
ref CUtlVector Constraints2 { get; }
```

- Property Value

- [CUtlVector](/docs/api/)

### **DebugPartNames** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VPhysXAggregateData_t.cs#L51)

```csharp
ref CUtlVector<CUtlString> DebugPartNames { get; }
```

- Property Value

- [CUtlVector](/docs/api/-1)<[CUtlString](/docs/api/shared/natives/cutlstring)>

### **EmbeddedKeyvalues** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VPhysXAggregateData_t.cs#L53)

```csharp
string EmbeddedKeyvalues { get; set; }
```

- Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

### **FeModel** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VPhysXAggregateData_t.cs#L42)

```csharp
PhysFeModelDesc_t? FeModel { get; }
```

- Property Value

- [PhysFeModelDesc_t](/docs/api/shared/schemadefinitions/physfemodeldesc_t)?

### **Flags** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VPhysXAggregateData_t.cs#L16)

```csharp
ref ushort Flags { get; }
```

- Property Value

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### **IndexHash** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VPhysXAggregateData_t.cs#L26)

```csharp
ref CUtlVector<ushort> IndexHash { get; }
```

- Property Value

- [CUtlVector](/docs/api/-1)<[ushort](https://learn.microsoft.com/dotnet/api/system.uint16)>

### **IndexNames** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VPhysXAggregateData_t.cs#L24)

```csharp
ref CUtlVector<ushort> IndexNames { get; }
```

- Property Value

- [CUtlVector](/docs/api/-1)<[ushort](https://learn.microsoft.com/dotnet/api/system.uint16)>

### **Joints** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VPhysXAggregateData_t.cs#L40)

```csharp
ref CUtlVector Joints { get; }
```

- Property Value

- [CUtlVector](/docs/api/)

### **Parts** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VPhysXAggregateData_t.cs#L31)

```csharp
ref CUtlVector Parts { get; }
```

- Property Value

- [CUtlVector](/docs/api/)

### **RefCounter** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VPhysXAggregateData_t.cs#L18)

```csharp
ref ushort RefCounter { get; }
```

- Property Value

- [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### **ShapeMarkups** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VPhysXAggregateData_t.cs#L34)

```csharp
ref CUtlVector ShapeMarkups { get; }
```

- Property Value

- [CUtlVector](/docs/api/)

### **SurfacePropertyHashes** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/VPhysXAggregateData_t.cs#L46)

```csharp
ref CUtlVector<uint> SurfacePropertyHashes { get; }
```

- Property Value

- [CUtlVector](/docs/api/-1)<[uint](https://learn.microsoft.com/dotnet/api/system.uint32)>

