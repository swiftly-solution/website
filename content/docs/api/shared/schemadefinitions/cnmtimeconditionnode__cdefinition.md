---
title: CNmTimeConditionNode__CDefinition
---

```csharp
public interface CNmTimeConditionNode__CDefinition : CNmBoolValueNode__CDefinition, CNmValueNode__CDefinition, CNmGraphNode__CDefinition, ISchemaClass<CNmGraphNode__CDefinition>, ISchemaClass<CNmValueNode__CDefinition>, ISchemaClass<CNmBoolValueNode__CDefinition>, ISchemaClass<CNmTimeConditionNode__CDefinition>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

**Comparand** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmTimeConditionNode__CDefinition.cs#L20)

```csharp
ref float Comparand { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

**InputValueNodeIdx** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmTimeConditionNode__CDefinition.cs#L18)

```csharp
ref short InputValueNodeIdx { get; }
```

#### Property Value

- [short](https://learn.microsoft.com/dotnet/api/system.int16)

**Operator** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmTimeConditionNode__CDefinition.cs#L24)

```csharp
ref CNmTimeConditionNode__Operator_t Operator { get; }
```

#### Property Value

- [CNmTimeConditionNode__Operator_t](/docs/api/shared/schemadefinitions/cnmtimeconditionnode__operator_t)

**SourceStateNodeIdx** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmTimeConditionNode__CDefinition.cs#L16)

```csharp
ref short SourceStateNodeIdx { get; }
```

#### Property Value

- [short](https://learn.microsoft.com/dotnet/api/system.int16)

**Type** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmTimeConditionNode__CDefinition.cs#L22)

```csharp
ref CNmTimeConditionNode__ComparisonType_t Type { get; }
```

#### Property Value

- [CNmTimeConditionNode__ComparisonType_t](/docs/api/shared/schemadefinitions/cnmtimeconditionnode__comparisontype_t)

