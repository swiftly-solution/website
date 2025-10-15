---
title: CAnimEventDefinition
---

```csharp
public interface CAnimEventDefinition : ISchemaClass<CAnimEventDefinition>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### Cycle

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimEventDefinition.cs#L21)

```csharp
ref float Cycle { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### Duration

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimEventDefinition.cs#L23)

```csharp
ref float Duration { get; }
```

#### Property Value

- [float](https://learn.microsoft.com/dotnet/api/system.single)

### EndFrame

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimEventDefinition.cs#L19)

```csharp
ref int EndFrame { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### EventData

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimEventDefinition.cs#L26)

```csharp
SchemaUntypedField EventData { get; }
```

#### Property Value

- [SchemaUntypedField](/docs/api/shared/schemas/schemauntypedfield)

### EventName

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimEventDefinition.cs#L30)

```csharp
ref CGlobalSymbol EventName { get; }
```

#### Property Value

- [CGlobalSymbol](/docs/api/shared/natives/cglobalsymbol)

### Frame

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimEventDefinition.cs#L17)

```csharp
ref int Frame { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

### LegacyOptions

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CAnimEventDefinition.cs#L28)

```csharp
ref CBufferString LegacyOptions { get; }
```

#### Property Value

- [CBufferString](/docs/api/shared/natives/cbufferstring)

