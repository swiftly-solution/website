---
title: CNmStateNode__CDefinition
---

```csharp
public interface CNmStateNode__CDefinition : CNmPoseNode__CDefinition, CNmGraphNode__CDefinition, ISchemaClass<CNmGraphNode__CDefinition>, ISchemaClass<CNmPoseNode__CDefinition>, ISchemaClass<CNmStateNode__CDefinition>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### ChildNodeIdx

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmStateNode__CDefinition.cs#L17)

```csharp
ref short ChildNodeIdx { get; }
```

#### Property Value

- [short](https://learn.microsoft.com/dotnet/api/system.int16)

### EntryEvents

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmStateNode__CDefinition.cs#L20)

```csharp
SchemaUntypedField EntryEvents { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### ExecuteEvents

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmStateNode__CDefinition.cs#L23)

```csharp
SchemaUntypedField ExecuteEvents { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### ExitEvents

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmStateNode__CDefinition.cs#L26)

```csharp
SchemaUntypedField ExitEvents { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### IsOffState

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmStateNode__CDefinition.cs#L40)

```csharp
ref bool IsOffState { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### LayerBoneMaskNodeIdx

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmStateNode__CDefinition.cs#L38)

```csharp
ref short LayerBoneMaskNodeIdx { get; }
```

#### Property Value

- [short](https://learn.microsoft.com/dotnet/api/system.int16)

### LayerRootMotionWeightNodeIdx

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmStateNode__CDefinition.cs#L36)

```csharp
ref short LayerRootMotionWeightNodeIdx { get; }
```

#### Property Value

- [short](https://learn.microsoft.com/dotnet/api/system.int16)

### LayerWeightNodeIdx

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmStateNode__CDefinition.cs#L34)

```csharp
ref short LayerWeightNodeIdx { get; }
```

#### Property Value

- [short](https://learn.microsoft.com/dotnet/api/system.int16)

### TimedElapsedEvents

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmStateNode__CDefinition.cs#L32)

```csharp
SchemaUntypedField TimedElapsedEvents { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### TimedRemainingEvents

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmStateNode__CDefinition.cs#L29)

```csharp
SchemaUntypedField TimedRemainingEvents { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### UseActualElapsedTimeInStateForTimedEvents

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CNmStateNode__CDefinition.cs#L42)

```csharp
ref bool UseActualElapsedTimeInStateForTimedEvents { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

