---
title: CTargetSelectorUpdateNode
---

```csharp
public interface CTargetSelectorUpdateNode : CAnimUpdateNodeBase, ISchemaClass<CAnimUpdateNodeBase>, ISchemaClass<CTargetSelectorUpdateNode>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### **AngleMode** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTargetSelectorUpdateNode.cs#L16)

```csharp
ref TargetSelectorAngleMode_t AngleMode { get; }
```

#### Property Value

- [TargetSelectorAngleMode_t](/docs/api/shared/schemadefinitions/targetselectoranglemode_t)

### **Children** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTargetSelectorUpdateNode.cs#L19)

```csharp
ref CUtlVector Children { get; }
```

#### Property Value

- [CUtlVector](/docs/api/)

### **DesiredMoveHeadingParameter** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTargetSelectorUpdateNode.cs#L27)

```csharp
CAnimParamHandle DesiredMoveHeadingParameter { get; }
```

#### Property Value

- [CAnimParamHandle](/docs/api/shared/schemadefinitions/canimparamhandle)

### **EnablePhaseMatching** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTargetSelectorUpdateNode.cs#L33)

```csharp
ref bool EnablePhaseMatching { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **MoveHeadingParameter** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTargetSelectorUpdateNode.cs#L25)

```csharp
CAnimParamHandle MoveHeadingParameter { get; }
```

#### Property Value

- [CAnimParamHandle](/docs/api/shared/schemadefinitions/canimparamhandle)

### **PhaseMatchingMaxRootMotionSkip** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTargetSelectorUpdateNode.cs#L35)

```csharp
ref float PhaseMatchingMaxRootMotionSkip { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **TargetFacePositionIsWorldSpace** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTargetSelectorUpdateNode.cs#L31)

```csharp
ref bool TargetFacePositionIsWorldSpace { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **TargetFacePositionParameter** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTargetSelectorUpdateNode.cs#L23)

```csharp
CAnimParamHandle TargetFacePositionParameter { get; }
```

#### Property Value

- [CAnimParamHandle](/docs/api/shared/schemadefinitions/canimparamhandle)

### **TargetPosition** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTargetSelectorUpdateNode.cs#L21)

```csharp
CAnimParamHandle TargetPosition { get; }
```

#### Property Value

- [CAnimParamHandle](/docs/api/shared/schemadefinitions/canimparamhandle)

### **TargetPositionIsWorldSpace** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CTargetSelectorUpdateNode.cs#L29)

```csharp
ref bool TargetPositionIsWorldSpace { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

