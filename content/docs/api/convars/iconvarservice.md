---
title: IConVarService
---

# Interface IConVarService

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Convars/IConVarService.cs#L3)

**Namespace**: [SwiftlyS2.Shared.Convars](/docs/api/convars)

**Assembly**: SwiftlyS2.CS2.dll

```csharp
public interface IConVarService
```

## Methods

### Create(string, string, T, ConvarFlags)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Convars/IConVarService.cs#L23)

Create a new convar.

```csharp
IConVar<T> Create<T>(string name, string helpMessage, T defaultValue, ConvarFlags flags = ConvarFlags.NONE)
```

#### Parameters

- **name**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The name of the convar.
- **helpMessage**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The help message of the convar.
- **defaultValue**: T - The default value of the convar.
- **flags**: [ConvarFlags](/docs/api/convars/convarflags) - The flags of the convar.

#### Returns

- [IConVar](/docs/api/convars/iconvart)<T> - The created convar.

#### Type Parameters

- **T**:  - The type of the convar.

### Create(string, string, T, T?, T?, ConvarFlags)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Convars/IConVarService.cs#L36)

Create a new convar with min and max values.

```csharp
IConVar<T> Create<T>(string name, string helpMessage, T defaultValue, T? minValue, T? maxValue, ConvarFlags flags = ConvarFlags.NONE) where T : unmanaged
```

#### Parameters

- **name**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The name of the convar.
- **helpMessage**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The help message of the convar.
- **defaultValue**: T - The default value of the convar.
- **minValue**: T? - The min value of the convar.
- **maxValue**: T? - The max value of the convar.
- **flags**: [ConvarFlags](/docs/api/convars/convarflags) - The flags of the convar.

#### Returns

- [IConVar](/docs/api/convars/iconvart)<T> - The created convar.

#### Type Parameters

- **T**:  - The type of the convar.

### CreateOrFind(string, string, T, ConvarFlags)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Convars/IConVarService.cs#L47)

Create a new convar or find an existing one by name.

```csharp
IConVar<T> CreateOrFind<T>(string name, string helpMessage, T defaultValue, ConvarFlags flags = ConvarFlags.NONE)
```

#### Parameters

- **name**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The name of the convar.
- **helpMessage**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The help message of the convar.
- **defaultValue**: T - The default value of the convar.
- **flags**: [ConvarFlags](/docs/api/convars/convarflags) - The flags of the convar.

#### Returns

- [IConVar](/docs/api/convars/iconvart)<T> - The created or found convar.

#### Type Parameters

- **T**:  - The type of the convar.

### CreateOrFind(string, string, T, T?, T?, ConvarFlags)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Convars/IConVarService.cs#L60)

Create a new convar or find an existing one by name with min and max values.

```csharp
IConVar<T> CreateOrFind<T>(string name, string helpMessage, T defaultValue, T? minValue, T? maxValue, ConvarFlags flags = ConvarFlags.NONE) where T : unmanaged
```

#### Parameters

- **name**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The name of the convar.
- **helpMessage**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The help message of the convar.
- **defaultValue**: T - The default value of the convar.
- **minValue**: T? - The min value of the convar.
- **maxValue**: T? - The max value of the convar.
- **flags**: [ConvarFlags](/docs/api/convars/convarflags) - The flags of the convar.

#### Returns

- [IConVar](/docs/api/convars/iconvart)<T> - The created or found convar.

#### Type Parameters

- **T**:  - The type of the convar.

### Find(string)

[View Source](https://github.com/swiftly-solution/swiftlys2/blob/master/managed/src/SwiftlyS2.Shared/Modules/Convars/IConVarService.cs#L11)

Find a existing convar by name.

```csharp
IConVar<T>? Find<T>(string name)
```

#### Parameters

- **name**: [string](https://learn.microsoft.com/dotnet/api/system.string) - The name of the convar.

#### Returns

- [IConVar](/docs/api/convars/iconvart)<T>? - The convar if found, null otherwise.

#### Type Parameters

- **T**:  - The type of the convar.

