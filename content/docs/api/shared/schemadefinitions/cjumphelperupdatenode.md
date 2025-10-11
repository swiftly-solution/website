---
title: CJumpHelperUpdateNode
---

```csharp
public interface CJumpHelperUpdateNode : CSequenceUpdateNode, CSequenceUpdateNodeBase, CLeafUpdateNode, CAnimUpdateNodeBase, ISchemaClass<CAnimUpdateNodeBase>, ISchemaClass<CLeafUpdateNode>, ISchemaClass<CSequenceUpdateNodeBase>, ISchemaClass<CSequenceUpdateNode>, ISchemaClass<CJumpHelperUpdateNode>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### **CorrectionMethod** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CJumpHelperUpdateNode.cs#L26)

```csharp
ref JumpCorrectionMethod CorrectionMethod { get; }
```

#### Property Value

- [JumpCorrectionMethod](/docs/api/shared/schemadefinitions/jumpcorrectionmethod)

### **JumpEndCycle** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CJumpHelperUpdateNode.cs#L24)

```csharp
ref float JumpEndCycle { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **JumpStartCycle** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CJumpHelperUpdateNode.cs#L22)

```csharp
ref float JumpStartCycle { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **OriginalJumpDuration** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CJumpHelperUpdateNode.cs#L20)

```csharp
ref float OriginalJumpDuration { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### **OriginalJumpMovement** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CJumpHelperUpdateNode.cs#L18)

```csharp
ref Vector OriginalJumpMovement { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### **ScaleSpeed** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CJumpHelperUpdateNode.cs#L30)

```csharp
ref bool ScaleSpeed { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **TargetParam** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CJumpHelperUpdateNode.cs#L16)

```csharp
CAnimParamHandle TargetParam { get; }
```

#### Property Value

- [CAnimParamHandle](/docs/api/shared/schemadefinitions/canimparamhandle)

### **TranslationAxis** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CJumpHelperUpdateNode.cs#L28)

```csharp
ISchemaFixedArray<bool> TranslationAxis { get; }
```

#### Property Value

- [ISchemaFixedArray](/docs/api/shared/schemas/ischemafixedarray-1)<[bool](https://learn.microsoft.com/dotnet/api/system.boolean)>

