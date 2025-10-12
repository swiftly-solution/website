---
title: CInfoVisibilityBox
---

```csharp
public interface CInfoVisibilityBox : CBaseEntity, CEntityInstance, ISchemaClass<CEntityInstance>, ISchemaClass<CBaseEntity>, ISchemaClass<CInfoVisibilityBox>, ISchemaField, ISchemaClass, INativeHandle
```

#### Implements

## Properties

### BoxSize

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CInfoVisibilityBox.cs#L18)

```csharp
ref Vector BoxSize { get; }
```

#### Property Value

- [Vector](/docs/api/shared/natives/vector)

### Enabled

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CInfoVisibilityBox.cs#L20)

```csharp
ref bool Enabled { get; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### Mode

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CInfoVisibilityBox.cs#L16)

```csharp
ref int Mode { get; }
```

#### Property Value

- [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### BoxSizeUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CInfoVisibilityBox.cs#L23)

```csharp
void BoxSizeUpdated()
```

### EnabledUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CInfoVisibilityBox.cs#L24)

```csharp
void EnabledUpdated()
```

### ModeUpdated()

[Source Code](https://github.com/swiftly-solution/swiftlys2/blob/beta/managed/src/SwiftlyS2.Generated/Schemas/Interfaces/CInfoVisibilityBox.cs#L22)

```csharp
void ModeUpdated()
```

