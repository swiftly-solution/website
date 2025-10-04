---
title: CommandAlias
---

```csharp
[AttributeUsage(AttributeTargets.Method, AllowMultiple = true)]
public class CommandAlias : Attribute
```

#### Inheritance

#### Inherited Members

## Constructors

**CommandAlias(string, bool)** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Commands/Attributes/CommandAliasAttribute.cs#L9)

```csharp
public CommandAlias(string alias, bool registerRaw = false)
```

#### Parameters

- **alias**: [string](https://learn.microsoft.com/dotnet/api/system.string)
- **registerRaw**: [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Properties

**Alias** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Commands/Attributes/CommandAliasAttribute.cs#L5)

```csharp
public string Alias { get; set; }
```

#### Property Value

- [string](https://learn.microsoft.com/dotnet/api/system.string)

**RegisterRaw** - [Source Code](https://github.com/swiftly-solution/swiftlys2/blob/main/managed/src/SwiftlyS2.Shared/Modules/Commands/Attributes/CommandAliasAttribute.cs#L7)

```csharp
public bool RegisterRaw { get; set; }
```

#### Property Value

- [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

