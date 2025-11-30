---
title: CNmFloatCurveEventNode__CDefinition
---

# Interface CNmFloatCurveEventNode__CDefinition

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmFloatCurveEventNode__CDefinition.cs#L11)

**Namespace**: [SwiftlyS2.Shared.SchemaDefinitions](/docs/api/schemadefinitions)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface CNmFloatCurveEventNode__CDefinition : CNmFloatValueNode__CDefinition, CNmValueNode__CDefinition, CNmGraphNode__CDefinition, ISchemaClass<CNmGraphNode__CDefinition>, ISchemaClass<CNmValueNode__CDefinition>, ISchemaClass<CNmFloatValueNode__CDefinition>, ISchemaClass<CNmFloatCurveEventNode__CDefinition>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

- [CNmFloatValueNode__CDefinition](/docs/api/schemadefinitions/cnmfloatvaluenode__cdefinition)
- [CNmValueNode__CDefinition](/docs/api/schemadefinitions/cnmvaluenode__cdefinition)
- [CNmGraphNode__CDefinition](/docs/api/schemadefinitions/cnmgraphnode__cdefinition)
- [ISchemaClass<CNmGraphNode__CDefinition>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CNmValueNode__CDefinition>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CNmFloatValueNode__CDefinition>](/docs/api/schemas/ischemaclasst)
- [ISchemaClass<CNmFloatCurveEventNode__CDefinition>](/docs/api/schemas/ischemaclasst)
- [ISchemaField](/docs/api/schemas/ischemafield)
- [ISchemaClass](/docs/api/schemas/ischemaclass)
- [INativeHandle](/docs/api/natives/inativehandle)

## Properties

### DefaultNodeIdx

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmFloatCurveEventNode__CDefinition.cs#L20)

```csharp
ref short DefaultNodeIdx { get; }
```

#### Property Value

- [short](https://learn.microsoft.com/dotnet/api/system.int16)

### DefaultValue

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmFloatCurveEventNode__CDefinition.cs#L22)

```csharp
ref float DefaultValue { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### EventConditionRules

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmFloatCurveEventNode__CDefinition.cs#L24)

```csharp
CNmBitFlags EventConditionRules { get; }
```

#### Property Value

- [CNmBitFlags](/docs/api/schemadefinitions/cnmbitflags)

### EventID

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmFloatCurveEventNode__CDefinition.cs#L18)

```csharp
ref CGlobalSymbol EventID { get; }
```

#### Property Value

- [CGlobalSymbol](/docs/api/natives/cglobalsymbol)

