---
title: CNmFloatMathNode__CDefinition
---

```csharp
public interface CNmFloatMathNode__CDefinition : CNmFloatValueNode__CDefinition, CNmValueNode__CDefinition, CNmGraphNode__CDefinition, ISchemaClass<CNmGraphNode__CDefinition>, ISchemaClass<CNmValueNode__CDefinition>, ISchemaClass<CNmFloatValueNode__CDefinition>, ISchemaClass<CNmFloatMathNode__CDefinition>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### **InputValueNodeIdxA** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmFloatMathNode__CDefinition.cs#L16)

```csharp
ref short InputValueNodeIdxA { get; }
```

#### Property Value

- [short](https://learn.microsoft.com/dotnet/api/system.int16)

### **InputValueNodeIdxB** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmFloatMathNode__CDefinition.cs#L18)

```csharp
ref short InputValueNodeIdxB { get; }
```

#### Property Value

- [short](https://learn.microsoft.com/dotnet/api/system.int16)

### **Operator** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmFloatMathNode__CDefinition.cs#L24)

```csharp
ref CNmFloatMathNode__Operator_t Operator { get; }
```

#### Property Value

- [CNmFloatMathNode__Operator_t](/docs/api/shared/schemadefinitions/cnmfloatmathnode__operator_t)

### **ReturnAbsoluteResult** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmFloatMathNode__CDefinition.cs#L20)

```csharp
ref bool ReturnAbsoluteResult { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **ReturnNegatedResult** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmFloatMathNode__CDefinition.cs#L22)

```csharp
ref bool ReturnNegatedResult { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### **ValueB** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmFloatMathNode__CDefinition.cs#L26)

```csharp
ref float ValueB { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

