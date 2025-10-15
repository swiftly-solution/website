---
title: CNmIDEventConditionNode__CDefinition
---

```csharp
public interface CNmIDEventConditionNode__CDefinition : CNmBoolValueNode__CDefinition, CNmValueNode__CDefinition, CNmGraphNode__CDefinition, ISchemaClass<CNmGraphNode__CDefinition>, ISchemaClass<CNmValueNode__CDefinition>, ISchemaClass<CNmBoolValueNode__CDefinition>, ISchemaClass<CNmIDEventConditionNode__CDefinition>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### EventConditionRules

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmIDEventConditionNode__CDefinition.cs#L19)

```csharp
CNmBitFlags EventConditionRules { get; }
```

#### Property Value

- [CNmBitFlags](/docs/api/shared/schemadefinitions/cnmbitflags)

### EventIDs

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmIDEventConditionNode__CDefinition.cs#L22)

```csharp
SchemaUntypedField EventIDs { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### SourceStateNodeIdx

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmIDEventConditionNode__CDefinition.cs#L17)

```csharp
ref short SourceStateNodeIdx { get; }
```

#### Property Value

- [short](https://learn.microsoft.com/dotnet/api/system.int16)

