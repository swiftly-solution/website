---
title: CNmTargetOffsetNode__CDefinition
---

```csharp
public interface CNmTargetOffsetNode__CDefinition : CNmTargetValueNode__CDefinition, CNmValueNode__CDefinition, CNmGraphNode__CDefinition, ISchemaClass<CNmGraphNode__CDefinition>, ISchemaClass<CNmValueNode__CDefinition>, ISchemaClass<CNmTargetValueNode__CDefinition>, ISchemaClass<CNmTargetOffsetNode__CDefinition>, ISchemaField, ISchemaClass, INativeHandle
```

- Implements

## Properties

### **InputValueNodeIdx** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmTargetOffsetNode__CDefinition.cs#L16)

```csharp
ref short InputValueNodeIdx { get; }
```

- Property Value

- [short](https://learn.microsoft.com/dotnet/api/system.int16)

### **IsBoneSpaceOffset** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmTargetOffsetNode__CDefinition.cs#L18)

```csharp
ref bool IsBoneSpaceOffset { get; }
```

- Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **RotationOffset** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmTargetOffsetNode__CDefinition.cs#L20)

```csharp
ref Quaternion RotationOffset { get; }
```

- Property Value

- [Quaternion](/docs/api/shared/natives/quaternion)

### **TranslationOffset** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmTargetOffsetNode__CDefinition.cs#L22)

```csharp
ref Vector TranslationOffset { get; }
```

- Property Value

- [Vector](/docs/api/shared/natives/vector)

