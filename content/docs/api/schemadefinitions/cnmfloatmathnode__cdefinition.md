---
title: CNmFloatMathNode__CDefinition
---

# Interface CNmFloatMathNode__CDefinition

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmFloatMathNode__CDefinition.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CNmFloatMathNode__CDefinition : CNmFloatValueNode__CDefinition, CNmValueNode__CDefinition, CNmGraphNode__CDefinition, ISchemaClass<CNmGraphNode__CDefinition>, ISchemaClass<CNmValueNode__CDefinition>, ISchemaClass<CNmFloatValueNode__CDefinition>, ISchemaClass<CNmFloatMathNode__CDefinition>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CNmFloatValueNode__CDefinition](/docs/api/schemadefinitions/cnmfloatvaluenode__cdefinition)
- [CNmValueNode__CDefinition](/docs/api/schemadefinitions/cnmvaluenode__cdefinition)
- [CNmGraphNode__CDefinition](/docs/api/schemadefinitions/cnmgraphnode__cdefinition)
- [ISchemaClass<CNmGraphNode__CDefinition>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CNmValueNode__CDefinition>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CNmFloatValueNode__CDefinition>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CNmFloatMathNode__CDefinition>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### InputValueNodeIdxA

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmFloatMathNode__CDefinition.cs#L18)

```csharp
ref short InputValueNodeIdxA { get; }
```

#### Property Value

- [short](https://learn.microsoft.com/dotnet/api/system.int16)

### InputValueNodeIdxB

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmFloatMathNode__CDefinition.cs#L20)

```csharp
ref short InputValueNodeIdxB { get; }
```

#### Property Value

- [short](https://learn.microsoft.com/dotnet/api/system.int16)

### Operator

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmFloatMathNode__CDefinition.cs#L26)

```csharp
ref CNmFloatMathNode__Operator_t Operator { get; }
```

#### Property Value

- [CNmFloatMathNode__Operator_t](/docs/api/schemadefinitions/cnmfloatmathnode__operator_t)

### ReturnAbsoluteResult

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmFloatMathNode__CDefinition.cs#L22)

```csharp
ref bool ReturnAbsoluteResult { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ReturnNegatedResult

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmFloatMathNode__CDefinition.cs#L24)

```csharp
ref bool ReturnNegatedResult { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### ValueB

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmFloatMathNode__CDefinition.cs#L28)

```csharp
ref float ValueB { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

