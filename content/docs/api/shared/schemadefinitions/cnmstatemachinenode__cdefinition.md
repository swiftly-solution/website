---
title: CNmStateMachineNode__CDefinition
---

```csharp
public interface CNmStateMachineNode__CDefinition : CNmPoseNode__CDefinition, CNmGraphNode__CDefinition, ISchemaClass<CNmGraphNode__CDefinition>, ISchemaClass<CNmPoseNode__CDefinition>, ISchemaClass<CNmStateMachineNode__CDefinition>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### DefaultStateIndex

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmStateMachineNode__CDefinition.cs#L21)

```csharp
ref short DefaultStateIndex { get; }
```

#### Property Value

- [short](https://learn.microsoft.com/dotnet/api/system.int16)

### StateDefinitions

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmStateMachineNode__CDefinition.cs#L19)

```csharp
SchemaUntypedField StateDefinitions { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

