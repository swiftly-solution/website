---
title: CNmFloatCurveEventNode__CDefinition
---

```csharp
public interface CNmFloatCurveEventNode__CDefinition : CNmFloatValueNode__CDefinition, CNmValueNode__CDefinition, CNmGraphNode__CDefinition, ISchemaClass<CNmGraphNode__CDefinition>, ISchemaClass<CNmValueNode__CDefinition>, ISchemaClass<CNmFloatValueNode__CDefinition>, ISchemaClass<CNmFloatCurveEventNode__CDefinition>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**DefaultNodeIdx** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmFloatCurveEventNode__CDefinition.cs#L18)

```csharp
ref short DefaultNodeIdx { get; }
```

#### Property Value

- [short](https://learn.microsoft.com/dotnet/api/system.int16)

**DefaultValue** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmFloatCurveEventNode__CDefinition.cs#L20)

```csharp
ref float DefaultValue { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**EventConditionRules** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmFloatCurveEventNode__CDefinition.cs#L22)

```csharp
CNmBitFlags EventConditionRules { get; }
```

#### Property Value

- [CNmBitFlags](/docs/api/shared/schemadefinitions/cnmbitflags)

**EventID** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmFloatCurveEventNode__CDefinition.cs#L16)

```csharp
ref CGlobalSymbol EventID { get; }
```

#### Property Value

- [CGlobalSymbol](/docs/api/shared/natives/cglobalsymbol)

